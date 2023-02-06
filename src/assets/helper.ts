const numberToStringFormat = (n:number) => {
    let suffixes = ['st','nd','rd']
    let nStr:string = n.toString()
    
    let lastDigit = +nStr.slice(nStr.length-1)
    let suffix = suffixes[lastDigit-1]

    if (suffix) {
        return nStr + suffix
    }
    return nStr + 'th'
}


export {numberToStringFormat}