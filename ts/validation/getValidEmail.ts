// getValidEmail( [{ id: 1, email: 'badEmailDotgmail.com'  },{ id: 2, email: 'test@gmail.com'  }] ,'email');
// [{ email: 'test@gmail.com  }]

export function getValidEmail(arr: any[], key: string | number) {
    function checkEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const result = arr.filter((item: { [x: string]: any; }) => item[key] === item[key] && checkEmail(item[key]));
    return result;
}


