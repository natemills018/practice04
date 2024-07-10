export const TOKEN_KEY = 'token'
const URL_PREFACE = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

export function fetcher<T = any>(url: string, method: string = "GET", rawData?: any) {
    
    const headers = new Headers();

    const options: RequestInit = {
        headers,
        method,
    };

    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
        headers.append("Authorization", `Bearer ${token}`);
    }

    if (method === "POST" || method === "PUT") {
        options.body = JSON.stringify(rawData);
        headers.append("Content-Type", "application/json");
    }

    return new Promise<T>(async (resolve, reject) => {
        try {
            const res = await fetch(URL_PREFACE + url, options);
            const data = await res.json();

            if (res.ok) {
                resolve(data);
            } else {
                console.error(data);
                reject(data);
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

export const GET = <T = any>(url: string) => fetcher<T>(url);
export const POST = <T = any>(url: string, data: unknown) => fetcher<T>(url, "POST", data);
export const PUT = <T = any>(url: string, data: unknown) => fetcher<T>(url, "PUT", data);
export const DELETE = <T = any>(url: string) => fetcher<T>(url, "DELETE");
