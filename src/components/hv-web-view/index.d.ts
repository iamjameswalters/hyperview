/**
 * Copyright (c) Garuda Labs, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { PureComponent } from 'react';
import type { HvComponentProps } from 'hyperview/src/types';
export default class HvWebView extends PureComponent<HvComponentProps> {
    static namespaceURI: any;
    static localName: any;
    static localNameAliases: never[];
    props: HvComponentProps;
    onMessage: (event?: {
        nativeEvent: {
            data: string;
        };
    } | null) => void;
    render(): any;
}
