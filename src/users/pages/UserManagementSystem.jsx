import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
} from "@mui/material";
import { deleteUser, getUsers, updateUser } from "../services/usersApiService";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

import { useUser } from "../providers/UserProvider";

function UserManagementSystem() {
  const [users, setUsers] = useState([]);
  const { setUser, user } = useUser();
  const handleDeleteUser = (id) => {
    const updatedUserList = users.filter((user) => user.user_id !== id);
    setUsers(updatedUserList);
    deleteUser(id);
  };

  const handleStatusChange = (userId) => {
    setUser({
      ...user,
      isBusiness: !user.isBusiness,
    });

    const updatedUsers = users.map((_user) => {
      if (_user.user_id === userId) {
        const isBusiness = _user.isBusiness === true ? false : true;
        updateUser(userId, { isBusiness });

        return {
          ..._user,
          isBusiness,
        };
      } else {
        return _user;
      }
    });
    setUsers(updatedUsers);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getUsers();
      setUsers(response);
    }
    fetchData();
  }, []);
  console.log(users);

  return (
    <>
      <Container>
        <PageHeader
          title="users management system"
          subtitle="on this page you can watch the users details and edit users details"
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell>{user.user_id}</TableCell>
                  <TableCell>{`${user.name.first}\n ${user.name.last}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {`${user.isBusiness ? "Business" : "Not Business"}`}
                    <br />
                    {`${user.isAdmin ? "Admin" : "Not Admin"}`}
                  </TableCell>

                  <TableCell>
                    <Button onClick={() => handleStatusChange(user.user_id)}>
                      {user.isBusiness === true
                        ? "Make Regular"
                        : "Make Business"}
                    </Button>
                    {user.isAdmin !== true && (
                      <Button onClick={() => handleDeleteUser(user.user_id)}>
                        Delete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default UserManagementSystem;
