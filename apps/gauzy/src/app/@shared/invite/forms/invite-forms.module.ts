import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbAlertModule,
	NbButtonModule,
	NbCardModule,
	NbInputModule,
	NbSelectModule,
	NbDatepickerModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { InviteService } from '../../../@core/services/invite.service';
import { RoleService } from '../../../@core/services/role.service';
import { HttpLoaderFactory, ThemeModule } from '../../../@theme/theme.module';
import { EmailInviteFormComponent } from './email-invite-form/email-invite-form.component';
@NgModule({
	imports: [
		ThemeModule,
		NbDatepickerModule,
		FormsModule,
		ReactiveFormsModule,
		NbInputModule,
		NbCardModule,
		NbButtonModule,
		NgSelectModule,
		NbSelectModule,
		NbAlertModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	exports: [EmailInviteFormComponent],
	declarations: [EmailInviteFormComponent],
	entryComponents: [EmailInviteFormComponent],
	providers: [RoleService, InviteService]
})
export class InviteFormsModule {}
