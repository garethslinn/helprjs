// getValidEmail( [{ id: 1, email: 'badEmailDotgmail.com'  },{ id: 2, email: 'test@gmail.com'  }] ,'email');
// [{ email: 'test@gmail.com  }]

export function getValidEmail(arr, key) {
    function checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const result = arr.filter(item => item[key] === item[key] && checkEmail(item[key]));
    return result;
}


