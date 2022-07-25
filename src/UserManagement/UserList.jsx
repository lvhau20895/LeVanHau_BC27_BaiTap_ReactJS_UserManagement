import axios from "axios";
import React, { Component } from "react";

export default class UserList extends Component {
	handleDeleteUser = async (userId) => {
		try {
			await axios.delete(
				`https://62af1a73b0a980a2ef3a17a3.mockapi.io/api/users/${userId}`
			);
			this.props.onDeleteSuccess();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { users, onSelectUser } = this.props;
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>STT</th>
							<th>Tài khoản</th>
							<th>Họ tên</th>
							<th>Mật khẩu</th>
							<th>Email</th>
							<th>Số điện thoại</th>
							<th>Loại người dùng</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr key={index}>
									<td>{user.id}</td>
									<td>{user.account}</td>
									<td>{user.username}</td>
									<td>{user.password}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.type}</td>
									<td>
										<button
											className="btn btn-primary me-2"
											onClick={() =>
												onSelectUser(user.id)
											}
										>
											Chỉnh sửa
										</button>
										<button
											className="btn btn-danger"
											onClick={() =>
												this.handleDeleteUser(user.id)
											}
										>
											Xóa
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
