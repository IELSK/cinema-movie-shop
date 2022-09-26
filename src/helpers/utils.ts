export const API_URL = "https://api.themoviedb.org/3/";
export const api_key = "37e2e0d2bcb60cccdd0d7306dc8c525f";
export const img_url = "https://image.tmdb.org/t/p/original"

export type InputMask = "cpf" | "phone" | "cep" | string;

export function hasMissingRequiredKeys(headers: any[], formData: any): boolean {
	const missingKeys: string[] = [];
	headers.forEach((header: { required: boolean; key: string }) => {
		if (header.required && !formData[header.key]) {
			missingKeys.push(header.key);
			return;
		}
	});
	return !!missingKeys.length;
}

export function clearForm(formData: any): void {
	for (let key in formData) {
		delete formData[key];
	}
}
