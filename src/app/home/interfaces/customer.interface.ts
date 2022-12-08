export interface Customer {
    id?: number,
    name: string,
    address: string,
    email: string,
    phone: string,
    rfc: string,
    fec_nac: string,
    image: string
}

export interface Invoice {
    id?: number,
    name_transmitter: string,
    address_transmitter: string,
    description: string,
    remark: string,
    create_at: string
}

export interface Product {
    id?: number,
    productName: string,
    price: number,
    description: string,
    createAt: string
}