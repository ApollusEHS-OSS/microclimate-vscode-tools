/*******************************************************************************
 * Copyright (c) 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

import * as vscode from "vscode";
import * as crypto from "crypto";

import Log from "../../../Logger";
import Settings from "../../../constants/Settings";
import Endpoints from "../../../constants/Endpoints";

/**
 * See getOpenIDConfig(hostname)
 */
export interface IOpenIDConfig {
    // There are a lot more fields than this in the config object, but these are the ones we're interested in at this time
    issuer: string;
    token_endpoint: string;
    authorization_endpoint: string;
    // This one's not actually returned by the config endpoint - I insert it myself
    revoke_endpoint: string;

    grant_types_supported: string[];
    response_types_supported: string[];
}

/**
 * Helper functions used by Authenticator.ts and TokenSetManager
 */
namespace AuthUtils {
    export const TIMEOUT: number = 15000;

    /*
    export async function getOpenIDConfig(icpHostname: string): Promise<IOpenIDConfig> {
        const oidcServerUrl = getOIDCServerURL(icpHostname);
        const openIDConfigUrl: string = `${oidcServerUrl}/.well-known/openid-configuration`;

        const oidcConfig: IOpenIDConfig = await request.get(openIDConfigUrl, {
            json: true,
            rejectUnauthorized: Requester.shouldRejectUnauthed(openIDConfigUrl),
            timeout: TIMEOUT,
        });
        // not provided by the config, but this is where the revoke endpoint is
        // https://www.ibm.com/support/knowledgecenter/en/SSEQTP_liberty/com.ibm.websphere.wlp.doc/ae/twlp_oidc_revoke.html
        oidcConfig.revoke_endpoint = oidcServerUrl + "/revoke";
        return oidcConfig;
    }*/

    /**
     * @returns A URL to the Liberty OP server for the given cluster hostname.
     */
    export function getOIDCServerURL(masterIP: string): vscode.Uri {
        return vscode.Uri.parse(`https://${masterIP}:${Endpoints.ICP_MASTER_SERVER_PORT}${Endpoints.ICP_OIDC_SERVER_PATH}`);
    }

    /**
     * Returns a 16-byte hex string, suitable for use as a `nonce` or `state`.
     * Use hex because these characters have to be urlencoded.
     */
    export function getCryptoRandomHex(): string {
        return crypto.randomBytes(16).toString("hex");
    }

    /**
     * Show a message warning the user the browser will open and then call-back to VS Code.
     * If the user has already seen and hidden the message, don't show it.
     * @returns true, unless the user pressed "Cancel" to cancel opening the browser.
     */
    export async function shouldOpenBrowser(): Promise<boolean> {
        const config = vscode.workspace.getConfiguration(Settings.CONFIG_SECTION);
        if (!config.get<boolean>(Settings.SHOW_OPEN_LOGIN_MSG)) {
            // No need to show the login prompt, just open browser
            return true;
        }

        Log.d("Showing shouldOpenBrowser message");

        const BTN_OK = "OK";
        const BTN_DONT_SHOW = "OK, and hide this message";
        const openResponse = await vscode.window.showInformationMessage(
            "The browser will open to the ICP login page. Log in and open the URI when VS Code prompts you.",
            { modal: true },
            BTN_OK, BTN_DONT_SHOW
        );
        // Log.i("open is", openResponse);

        if (openResponse === BTN_OK) {
            return true;
        }
        else if (openResponse === BTN_DONT_SHOW) {
            Log.d("Not showing shouldOpenBrowser message any more");
            config.update(Settings.SHOW_OPEN_LOGIN_MSG, false);
            return true;
        }
        else {
            // they picked "cancel"
            return false;
        }
    }
}

export default AuthUtils;
