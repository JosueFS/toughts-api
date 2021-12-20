export function getAvatarWithInitials(name: string): string {
  const newName = name.split(' ').join('-');

  return `https://avatars.dicebear.com/api/initials/${newName}.svg`;
}
