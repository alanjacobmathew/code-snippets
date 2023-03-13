import React from 'react'
import { __ } from '@wordpress/i18n'
import { BaseSnippetProps } from '../../types/BaseSnippetProps'
import { isNetworkAdmin } from '../../utils/general'

export const MultisiteSharingSettings: React.FC<BaseSnippetProps> = ({ snippet, setSnippet }) =>
	isNetworkAdmin() ?
		<>
			<h2 className="screen-reader-text">{__('Sharing Settings', 'code-snippets')}</h2>
			<p className="snippet-sharing-setting">
				<label htmlFor="snippet_sharing">
					<input
						type="checkbox"
						name="snippet_sharing"
						checked={snippet.shared_network}
						onChange={event => setSnippet(previous => ({ ...previous, shared_network: event.target.checked }))}
					/>
					{__('Allow this snippet to be activated on individual sites on the network', 'code-snippets')}
				</label>
			</p>
		</> :
		null
