import { useState } from "react";

export function useInput(initialValue: string = "") {
	const [value, setValue] = useState<string>(initialValue);

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	return {
		value,
		handleChange,
	};
}
