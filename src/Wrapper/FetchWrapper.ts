export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}
function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: headers
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body: any) {
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body: any) {
    const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}