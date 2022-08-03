import AsyncStorage from '@react-native-async-storage/async-storage'

const saveItem = (key: string, value: any) => {
    try {
        AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        throw (e)
    }
}

const getItem = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue === null ? null : JSON.parse(jsonValue as string)
    } catch (e) {
        throw (e)
    }
}

const clearItem = (key: string) => {
    saveItem(key, null)
}

export { saveItem, getItem, clearItem }