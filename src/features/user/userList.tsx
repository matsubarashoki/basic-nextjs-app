// rendering component for a list of users from fetching data from an API
import { User } from "@/types/projectA";

export default function UserList({ users }: { users: User[] }) {
  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li key={user.id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
