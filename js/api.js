// посилання на бек сервіс
const BASE_URL = "http://localhost:3000/api/pools";
// шлях  до наших  обєктів;

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${BASE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};
export const getAllPools = async() => {
    const rawRes = await baseRequest({ method: "GET" })
    return rawRes.json()
}
export const getPoolById = async(id) => {
    const rawRes = await baseRequest({urlPath:`/${id}`, method: "GET" })
    return rawRes.json()
}
export const searchPools = async(key) => {
    const rawRes = await baseRequest({
        urlPath: `?searchKey=${key}`,
        method: "GET",
    });
    return await rawRes.json();
};

export const postPools = (body) => baseRequest({ method: "POST", body });

export const editPools = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deletePoolss = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });

