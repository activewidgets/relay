/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { data } from "@activewidgets/options";


function convertRelayConnection(obj){

    if (!obj ||
        typeof obj != 'object' ||
        typeof obj.pageInfo != 'object') {
        return;
    }

    let {startCursor, endCursor, hasNextPage, hasPreviousPage} = obj.pageInfo,
        next = hasNextPage ? endCursor : undefined,
        prev = hasPreviousPage ? startCursor : undefined;

    if (Array.isArray(obj.nodes)){
        return {
            items: obj.nodes,
            next,
            prev
        };
    }

    if (Array.isArray(obj.edges)){
        return {
            items: obj.edges.map(({node}) => node),
            next,
            prev
        };
    }
}

 
export function relay(){
    return [
        data(convertRelayConnection)
    ];
}
 