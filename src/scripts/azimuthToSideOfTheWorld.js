export default function azimuthToSideOfTheWorld(azimut) {
    const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
    if ((0 <= azimut && azimut < 22) || (337 < azimut && azimut <= 360)) { return directions[0]; }
    else if (22 <= azimut && azimut < 67) { return directions[1]; }
    else if (67 <= azimut && azimut < 112) { return directions[2]; }
    else if (112 <= azimut && azimut < 157) { return directions[3]; }
    else if (157 <= azimut && azimut < 202) { return directions[4]; }
    else if (202 <= azimut && azimut < 247) { return directions[5]; }
    else if (247 <= azimut && azimut < 292) { return directions[6]; }
    else if (292 <= azimut && azimut < 337) { return directions[7]; }
    else return azimut
}