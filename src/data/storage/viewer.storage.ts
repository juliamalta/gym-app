import { SecureStorage } from '@/common/adapters/storage.adapter'
import { IAuthViewer } from '@/common/types'

const save = (viewer: IAuthViewer) => {
    SecureStorage.storeData('viewer', JSON.stringify(viewer))
}

const get = async (): Promise<IAuthViewer | null> => {
    try {
        const viewerData = await SecureStorage.getData<IAuthViewer>('viewer')
        return viewerData
    } catch (error) {
        return null
    }
}

const clean = () => {
    SecureStorage.deleteData('viewer')
}

export const ViewerStorage = { save, get, clean }
