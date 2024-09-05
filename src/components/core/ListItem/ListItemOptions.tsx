import { appPath } from '@/common/configs'
export const ListProject = [
    {
        link: appPath.projects.detail,
        name: 'Pulley Anterior Pronado',
    },
    {
        link: appPath.projects.detail,
        name: 'Rosca Direta com Halter',
    },
    {
        link: appPath.projects.detail,
        name: 'Remada Baixa Neutra',
    },
    {
        link: appPath.projects.detail,
        name: 'Rosca Martelo no Cross',
    },
    {
        link: appPath.projects.detail,
        name: 'Supino  com Halters',
    },
    {
        link: appPath.projects.detail,
        name: 'Desenvolvimento com Halters',
    },
    {
        link: appPath.projects.detail,
        name: 'Triceps Cross Barra',
    },
    {
        link: appPath.projects.detail,
        name: 'Triceps Testa com Halter',
    },
    {
        link: appPath.projects.detail,
        name: 'Prancha Abdominal',
    },
]
export const ListSales = [
    {
        link: appPath.salesOrders.detail,
        name: 'Série A',
        desc: 'Description Série A',
    },

    {
        link: appPath.salesOrders.detail,
        name: 'Série B',
        desc: 'Description Série A',
    },
]

export const getColorForSituation = (situation: string): string => {
    switch (situation) {
        case 'PENDING APROVAL':
            return '#EC9A3C'
        case 'DRAFT':
            return '#777777'
        case 'SENT':
            return '#2485E8'
        case 'APPROVED':
            return '#169E6D'
        case 'ACCEPTED':
            return '#169E6D'
        case 'REJECTED':
            return '#E54643'
        case 'EXPIRED':
            return '#E54643'
        case 'ON REVIEW':
            return '#2485E8'
        case 'ON MEASURING':
            return '#2485E8'
        case 'NOT SENT TO MEASURING':
            return '#E54643'
        case 'ON DELIVERY':
            return '#2485E8'
        default:
            return 'black'
    }
}
