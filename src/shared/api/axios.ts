import axios from 'axios';

// Создаем инстанс Axios с базовым URL
export const api = axios.create({
	baseURL: 'http://v-117908-unlim.vpn.mgn.ru',
	timeout: 2000,
	headers: {
		'Content-Type': 'application/json',
	},
});
