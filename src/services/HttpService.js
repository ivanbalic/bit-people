class HttpService {
  get(url) {
    return fetch(url).then(response => {
      const { status, statusText } = response;
      if (status >= 200 && status < 300) {
        return response.json();
      }
      return Promise.reject(`${status} ${statusText}`);
    });
  }
}

export const httpService = new HttpService();
