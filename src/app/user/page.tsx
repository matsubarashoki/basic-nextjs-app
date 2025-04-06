import UserList from "@/features/user/userList";
import { fetchUsers } from "@/lib/fetchUsers";

export default async function userPage() {
  const users = await fetchUsers();

  return (
    <main className="p-8">
      <div className="justify-between flex items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Add User
        </button>
      </div>

      <UserList users={users} />
    </main>
  );
}
