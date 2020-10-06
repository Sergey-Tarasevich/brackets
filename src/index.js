module.exports = function check(str, bracketsConfig) {
    let result = [];

    for (let i = 0; i < bracketsConfig.length; i++) {

        result.push(bracketsConfig[i][0] + bracketsConfig[i][1])

    }

    for (let i = 0; i < str.length; i++) {

        if (str.includes(result[i])) {

            str = str.replace(result[i], "")
            i = -1
        }
    }

    if (str.length === 0) {
        return true

    } else {

        return false
    }
}
