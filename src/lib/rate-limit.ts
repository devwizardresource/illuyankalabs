interface Bucket {
  count: number;
  resetAt: number;
}

const MAX_TRACKED_KEYS = 5_000;
const buckets = new Map<string, Bucket>();

/**
 * Limitador de ventana fija en memoria. Frena abusos básicos (spam,
 * envíos masivos) en una sola instancia; con varias réplicas debe
 * sustituirse por un almacén compartido (Redis, Upstash…).
 */
export function isRateLimited(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): boolean {
  const now = Date.now();

  if (buckets.size > MAX_TRACKED_KEYS) {
    for (const [storedKey, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(storedKey);
    }
    // Si sigue lleno (ataque distribuido), se descarta todo antes que crecer sin límite.
    if (buckets.size > MAX_TRACKED_KEYS) buckets.clear();
  }

  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > limit;
}
