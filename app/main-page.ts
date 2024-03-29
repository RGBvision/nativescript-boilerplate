import {EventData, fromObject, ObservableArray, Page} from '@nativescript/core';
import {applyTheme} from "~/utils/theme";
import {orientationType, setOrientation} from "~/utils/orientation";

const users = [
  { name: 'Billy Bob' },
  { name: 'Tweeder' },
  { name: 'Mox' },
  { name: 'Coach' },
  { name: 'Lance' },
  { name: 'Johnson' },
  { name: 'William' },
  { name: 'Franklin' }
];

const viewModel = fromObject({
  users: new ObservableArray(users)
});

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = viewModel;
}

export function pageLoaded() {
  applyTheme();
  setOrientation(orientationType.landscape);
}
