import { useState } from 'react';

type IlocalKeys = 'userId';

function useLocalStorage<T>(key: IlocalKeys) {
	const [localUserId, setStoredValue] = useState<T | null>(getValue);
	function getValue(): T | null {
		let value = null;
		try {
			const data = window.localStorage.getItem(key);
			value = data ? JSON.parse(data) : null;
		} catch (error) {
			new Error('Ошибка в чтении из локального хранилища');
			window.localStorage.removeItem(key);
		}
		return value;
	}
	function setValue(value: T) {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
			const local = getValue();
			setStoredValue(local);
		} catch (error) {
			new Error('Ошибка в записи в локальное хранилище');
		}
	}

	function removeValue() {
		try {
			window.localStorage.removeItem(key);
			const local = getValue();
			setStoredValue(local);
		} catch (error) {
			new Error('Ошибка удалении из локального хранилище');
		}
	}

	return { localUserId, setValue, removeValue, getValue } as const;
}

export default useLocalStorage;
