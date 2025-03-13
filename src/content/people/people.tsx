import Image1 from './i/Pekola_Jukka.jpg';
import Image2 from './i/Dmitry_Golubev.jpg';
import Image3 from './i/Joonas_Peltonen.jpg';
import Image4 from './i/Yu-Cheng_Chang.jpg';
import Image5 from './i/George_Thomas.jpg';
import Image6 from './i/Libin_Wang.jpg';
import Image7 from './i/Sergei_Lemziakov.jpg';
import Image8 from './i/Bayan_Karimi.jpg';
import Image9 from './i/Andrew_Guthrie.jpg';
import Image10 from './i/Marco_Marin_Suarez.jpg';
import Image11 from './i/Kuan-Hsun_Chiang.jpg';
import Image12 from './i/Diego_Subero.jpg';
import Image13 from './i/Rishabh_Upadhyay.jpg';
import Image14 from './i/Dmitrii_Lvov.jpg';
import Image15 from './i/Christoforus_Dimas_Satrya.jpg';

export interface IGroupPerson {
    name: string,
    degree?: string,
    image?: string,
    address?: string,
    phone?: string,
    fax?: string,
    email?: string,
    publications?: string,
}

export interface IPeopleGroup {
    title: string;
    address?: string;
    list: IGroupPerson[],
};

export const people = [
    {
        title: 'Senior Researchers',
        address: 'Low Temperature Laboratory, Department of\u00A0Applied Physics, <br /> Aalto University School of\u00A0Science, P.O.\u00A0Box\u00A013500, <br /> 00076 AALTO, Finland',
        list: [
            {
                name: 'Prof. Jukka Pekola',
                image: Image1,
                address: 'Micronova, Tietotie 3, office\u00A04110 (4th floor)',
                phone: '+358 50 344 2697, <br /> +358 40 700 9290 (mobile)',
                fax: '+358-9-470 25008',
                email: 'jukka.pekola(at)aalto.fi',
                publications: 'https://publons.com/researcher/2680137/jukka-pekola/?utm_campaign=researcher_id_badge',
            },
            {
                name: 'Dr. Dmitry S. Golubev',
                image: Image2,
                address: 'Micronova, Tietotie 3, office\u00A04160 (4th floor)',
                email: 'dmitry.golubev(at)aalto.fi',
                publications: 'https://publons.com/researcher/1523341/dmitry-golubev/?utm_campaign=researcher_id_badge',
            },
            {
                name: 'Dr. Joonas Peltonen',
                image: Image3,
                address: 'Micronova, Tietotie 3, office\u00A04111 (4th floor)',
                phone: '+358-50-437-1594 (office)',
                email: 'joonas.peltonen(at)aalto.fi',
                publications: 'https://publons.com/researcher/2609045/joonas-t-peltonen/?utm_campaign=researcher_id_badge',
            },
        ],
    },
    {
        title: 'Postdoctoral Researchers',
        address: 'Low Temperature Laboratory, Department of\u00A0Applied Physics, <br /> Aalto University School of\u00A0Science, P.O.\u00A0Box\u00A013500, <br /> 00076 AALTO, Finland',
        list: [
            {
                name: 'Dr. Yu-Cheng Chang',
                image: Image4,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'yu-cheng.chang(at)aalto.fi',
            },
            {
                name: 'Dr. George Thomas',
                image: Image5,
                address: 'Micronova, Tietotie 3, office\u00A04160 (4th floor)',
                email: 'george.thomas(at)aalto.fi',
            },
            {
                name: 'Dr. Libin Wang',
                image: Image6,
                address: 'Micronova, Tietotie 3, office\u00A04110 (4th floor)',
                email: 'libin.wang(at)aalto.fi',
            },
            {
                name: 'Dr. Sergei Lemziakov',
                image: Image7,
                address: 'Micronova, Tietotie 3, office\u00A04110 (4th floor)',
                email: 'sergey.lemziakov(at)aalto.fi',
            },
            {
                name: 'M.Sc. Bayan Karimi',
                image: Image8,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'bayan.karimi(at)aalto.fi',
            },
            {
                name: 'Dr. Andrew Guthrie',
                image: Image9,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'andrew.guthrie(at)aalto.fi',
            },
        ],
    },
    {
        title: 'Ph.D. Students',
        address: 'Low Temperature Laboratory, Department of\u00A0Applied Physics, <br /> Aalto University School of\u00A0Science, P.O.\u00A0Box\u00A013500, <br /> 00076 AALTO, Finland',
        list: [
            {
                name: 'M.Sc. Marco Marín Suárez',
                image: Image10,
                address: 'Micronova, Tietotie 3, office\u00A04140 (4th floor)',
                email: 'marco.marinsuarez(at)aalto.fi',
            },
            {
                name: 'Kuan-Hsun Chiang',
                image: Image11,
                address: 'Micronova, Tietotie 3, office\u00A04140 (4th floor)',
                email: 'kuan-hsun.chiang(at)aalto.fi',
            },
            {
                name: 'M. Sc. Diego Subero',
                image: Image12,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'diego.suberorengel@aalto.fi',
            },
            {
                name: 'M.Sc. Rishabh Upadhyay',
                image: Image13,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'rishabh.upadhyay(at)aalto.fi',
            },
            {
                name: 'M. Sc. Dmitrii Lvov',
                image: Image14,
                address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
                email: 'dmitrii.lvov@aalto.fi',
            },
            {
                name: 'Christoforus Dimas Satrya',
                image: Image15,
                address: 'Micronova, Tietotie 3, office\u00A04111 (4th floor)',
                email: 'christoforus.satrya@aalto.fi',
            },
        ],
    },
    {
        title: 'Former group members',
        list: [
            {
                name: 'Dr. Anne Anthore',
            },
            {
                name: 'Dr. Thomas Aref',
            },
            {
                name: 'Mr. Kurt Baarman',
            },
            {
                name: 'Dr. Massimo Borrelli',
            },
            {
                name: 'Dr. Timothé Faivre',
            },
            {
                name: 'Dr. Anna Feshchenko',
            },
            {
                name: 'M.Sc. Jouni Flyktman',
            },
            {
                name: 'Dr. Simone Gasparinetti',
            },
            {
                name: 'Dr. Meri Helle',
            },
            {
                name: 'Dr. Tommy Holmqvist',
            },
            {
                name: 'Mr. Antti Jokiluoma',
            },
            {
                name: 'Dr. Sergey Kafanov',
            },
            {
                name: 'Dr. Antti Kemppinen',
            },
            {
                name: 'Dr. Ivan Khaymovich',
            },
            {
                name: 'Dr. Jani Kivioja',
            },
            {
                name: 'M.Sc. Helena Knowles',
            },
            {
                name: 'Mr. Tuomas Kortelahti',
            },
            {
                name: 'Dr. Jonne Koski',
            },
            {
                name: 'Ms. Laura MacDonald',
            },
            {
                name: 'Ms. Sarah MacLeod',
            },
            {
                name: 'Prof. Matthias Meschke',
            },
            {
                name: 'Dr. Ville Maisi',
            },
            {
                name: 'Mr. Antti Moisio',
            },
            {
                name: 'Dr. Juha Muhonen',
            },
            {
                name: 'Mr. Jesse Muhojoki',
            },
            {
                name: 'Doc. Mikko Möttönen',
            },
            {
                name: 'Dr. Robab Najafi Jabdaraghi',
            },
            {
                name: 'Dr. Hung Nguyen',
            },
            {
                name: 'M.Sc. Tommi Nieminen',
            },
            {
                name: 'Dr. Antti Niskanen',
            },
            {
                name: 'Mr. Nicolas Paillet',
            },
            {
                name: 'Mr. Ilmo Räisänen',
            },
            {
                name: 'Dr. Alberto Ronzani',
            },
            {
                name: 'Dr. Olli-Pentti Saira',
            },
            {
                name: 'Dr. Alexander Savin',
            },
            {
                name: 'Dr. Paolo Solinas',
            },
            {
                name: 'Mr. Tuomas Talka',
            },
            {
                name: 'Dr. Matthieu Taupin',
            },
            {
                name: 'Dr. Andrey Timofeev',
            },
            {
                name: 'Dr. Jussi Toppari',
            },
            {
                name: 'Dr. Juha Vartiainen',
            },
            {
                name: 'Dr. Youngsoo Yoon',
            },
        ]
    }
];
