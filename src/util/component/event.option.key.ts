/**
 * Generate a unique key for any set of event options
 */

export function eventOptionKey(option: boolean | AddEventListenerOptions) {
	if (!option) return 0;
	if (option === true) return 0b0001;
	const capture = option.capture ? 0b0001 : 0;
	const passive = option.passive ? 0b0001 : 0;
	const once = option.once ? 0b0001 : 0;
	return capture | passive | once;
}
