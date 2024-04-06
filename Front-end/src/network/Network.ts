export class Network<PayloadBody, ResponseBody> {
  url: URL | null = null;
  headers: Headers = new Headers();
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' = 'GET';

  async request(payloadBody: PayloadBody): Promise<ResponseBody> {
    const urlStr = this.url?.href || '';

    const response = await fetch(urlStr, this.getFetchConfig(payloadBody));

    const responseJson = await response.json();

    return responseJson as ResponseBody;
  }

  private getFetchConfig(payloadBody: PayloadBody) {
    const baseFetchConfig = {
      method: this.method,
      headers: this.headers,
    };

    if (this.method === 'GET') {
      return baseFetchConfig;
    }

    return {
      ...baseFetchConfig,
      body: JSON.stringify(payloadBody),
    };
  }
}
