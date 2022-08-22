function axios(config: { url: string, method?: string; }): void {
    console.log(config);
}

axios({
    url: 'https://www.baidu.com'
});