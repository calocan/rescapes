import Statuses from "./statuses";
/**
 * Created by Andy Likuski on 2016.07.07
 * Copyright (c) 2016 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/***
 * The initial state of the application
 * @type {*|Map<K, V>|Map<string, V>}
 */
export default {
    settings: {
        // These are in here since they are used for arguments to the iframe, and hence can't be in css
        modelWidth: 580,
        modelHeight: 326
    },
    documents: {
        keys: ['amtrak_standard', 'the_new_rules_of_the_road'],
        baseUrl: id => (`https://docs.google.com/document/d/${id}/pub`),
        entries: {
            'amtrak_standard': {
                author: 'Andy Likuski',
                date: 'June 2016',
                location: 'Oakland, CA',
                status: Statuses.INITIALIZED,
                title: 'The AMTRAK Standard',
                id: '1GbrsFkL4hlMP9o-J1JLw4Qu08j6hEPde_ElJdanJX5U',
                modelKeys: ['AMTRAK Superliner', 'AMTRAK Café Car']
            },
            'the_new_rules_of_the_road': {
                author: 'Andy Likuski',
                date: 'June 2016',
                location: 'Oakland, CA',
                status: Statuses.INITIALIZED,
                title: 'The New Rules of the Road',
            }
        }
    },
    models: {
        keys: ['AMTRAK Superliner', 'AMTRAK Café Car'],
        baseUrl: (id, width, height) => (`embed.html?mid=${id}&width=${width}&height=${height}`),
        entries: {
            'Chair': {
                status: Statuses.INITIALIZED,
                id: '7aefec04-7954-4b62-b863-779468176c6d'
            },
            'AMTRAK Superliner': {
                status: Statuses.INITIALIZED,
                id: '2b495238-e77d-4edf-bb23-b186daf0640f',
                anchorId: 'id.5ktmpvprnx88',
                scenes: {

                }
            },
            'AMTRAK Café Car': {
                status: Statuses.INITIALIZED,
                id: '9b7bbfe8-2ad5-4074-ae81-7bc0645dfce9',
                scenes: {
                    'AMTRAK Café Seating': {
                        anchorId: 'id.bc4p3rsjqez8'
                    },
                    'AMTRAK Café Offerings': {
                        anchorId: 'id.wcuwoy7h102u'
                    },
                    'Group Seating': {
                        anchorId: 'id.wcuwoy7h102u'
                    },
                }
            },

            'Fixed Guideways': {
                status: Statuses.INITIALIZED,
                id: '419df1d2-949f-4e60-adbc-59da24a5c6ce',
                anchorId: '',
                scenes: {

                }
            }
        }
    }
};
