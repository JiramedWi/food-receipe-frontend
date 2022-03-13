import { useEffect } from "react";
import { fetchShowcase } from "../service/showcase";

const Login = () => {
	useEffect(() => {
		const payload = {
			api_key: "340cbb9c27ee1bbce956a447ec2ff6af",
			language: "en-US",
			page: 1,
		};
		fetchShowcase(payload)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log("err", err));
	}, []);

	return (
		<div>
			<h1>Login</h1>
		</div>
	);
};

export default Login;
