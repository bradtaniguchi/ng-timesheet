export interface Team {
  name: string;
  users: Array<string>;
  admins: Array<string>;
  description?: string;
  isPublic?: boolean;
}
