// uuid()
// Random ID generator
// 8ac16a9e-12fc-44fd-8311-952d212cbe02

export function uuid() {
    //@ts-ignore
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c: number) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}   