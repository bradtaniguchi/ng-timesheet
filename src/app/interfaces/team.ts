export interface Team {
  name: string;

  // the users array is what is parsed from the user's map onload
  users?: Array<string>;
  // the usersMap is whats saved to the database
  usersMap: {
    [key: string]: string;
  };
  admins: Array<string>;
  description?: string;
  isPublic?: boolean;
}
