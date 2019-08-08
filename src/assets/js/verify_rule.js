const verify_rule = {
    username:{
        pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/,
        message: '仅支持4-20位字母、数字、“_”组合'
    },
    password:{
        pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,20}$/,
        message: '仅支持8-20位字母、数字组合'
    },
}
export default verify_rule