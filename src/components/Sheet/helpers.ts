
export const getMinForm = (form, defaultValues) => {
    console.log(form)
    return Object
        .entries(form)
        .reduce((acc, [k,v]) => {
            if(typeof v === 'object' || v != defaultValues[k]){
                acc[k] = JSON.stringify(v)
            }
            return acc
        },
    {})
}

export const encodeForm = (form, defaultValues) => {
    const minForm = getMinForm(form,defaultValues)
    const queryString = new URLSearchParams(minForm).toString()
    return queryString
}

function paramsToObject(entries) {
    const result = {}
    for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
      result[key] = JSON.parse(value);
    }
    return result;
  }
  

export const decodeForm = (queryString) => {
    const params = new URLSearchParams(queryString)
    const form = paramsToObject(params.entries());
    return form
}