// src/mock/index.ts

import Mock from 'mockjs'

const generateRandomUserData = () => {
    return Mock.mock({
        'name': '@cname',
        'username': '@first',
        'password': '@string("lower", 10)', // 生成10位小写字母的随机字符串作为密码
        'phone': /^1[385][1-9]\d{8}/ // 生成符合中国手机号格式的随机手机号
    });
};

Mock.mock('/api/user/getAll', 'get', () => {
    const users = [];
    const randomUserCount = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < randomUserCount; i++) {
        users.push(generateRandomUserData());
    }
    return {
        status: 200,
        data: users,
        success: true,
        message: '成功'
    }
})
Mock.mock('/api/picture/getAll', 'get', () => {
    // 定义数据模板
    const data = Mock.mock({
        'data|30': [
            {
                'pic': '@image("200x300", "@color", "@word")',
                'text': '@word'
            }
        ]
    });
    return {
        code: 200,
        message: '成功',
        data: data.data
    }
})

Mock.mock('/api/user/login', 'post', (options) => {
    console.log(options)
    const body = JSON.parse(options.body);
    const { username, password } = body;

    // 模拟的用户数据
    const users = [
        { username: 'user', password: '123456' },
        { username: 'admin', password: '123456' }
    ];

    // 检查用户名和密码
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return {
            code: 200,
            message: '登录成功',
            data: {
                token: 'fake-jwt-token',
                username: user.username
            }
        };
    } else {
        return {
            code: 401,
            message: '用户名或密码不正确'
        };
    }
})