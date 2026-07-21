export function parseEmailRecipients(
  value: string | undefined,
  fallback: string,
): string[] {
  const recipients = (value ?? fallback)
    .split(/[;,\n]/)
    .map((email) => email.trim())
    .filter(Boolean);

  return recipients.length > 0 ? recipients : [fallback];
}
