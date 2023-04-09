export type User = {
    id:                number;
    name:              string;
    lastname:          string;
    email:             string;
    img:               null;
    email_verified_at: Date;
    celsimbolo:        null;
    celular:           null;
    ocupation:         null;
    peso:              null;
    altura:            null;
    token_fcm:         null;
    sexo:              null;
    fecheNacimiento:   null;
    notiEmail:         number;
    notiPush:          number;
    notiMarket:        number;
    created_at:        Date;
    updated_at:        Date;
    roles:             Role[];
    mis_objetivos:     any[];
    notificaciones:    any[];
    ordenes:           any[];
    mis_planes:        any[];
}

export type Role = {
    id:         number;
    name:       string;
    guard_name: string;
    created_at: Date;
    updated_at: Date;
    pivot:      Pivot;
}

export type Pivot = {
    model_id:   number;
    role_id:    number;
    model_type: string;
}
