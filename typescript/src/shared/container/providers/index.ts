import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';
import { DayjsDateProvider } from './DateProvider/implementations/DayjsDateProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';

container.registerInstance<IMailProvider>('MailProvider', new EtherealMailProvider());
container.registerSingleton<IDateProvider>('DayjsDateProvider', DayjsDateProvider);
