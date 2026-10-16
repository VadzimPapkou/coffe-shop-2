const WINDOW_MS = 10 * 60 * 1000;

const recent = new Map<string, number>();

export function isDuplicateLead(phoneKey: string): boolean {
  const now = Date.now();
  for (const [key, at] of recent) {
    if (now - at > WINDOW_MS) recent.delete(key);
  }
  const prev = recent.get(phoneKey);
  if (prev != null && now - prev < WINDOW_MS) return true;
  recent.set(phoneKey, now);
  return false;
}
