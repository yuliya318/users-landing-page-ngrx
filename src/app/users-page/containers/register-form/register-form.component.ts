import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Position } from '@users-page/interfaces/position.interface';
import { select, Store } from '@ngrx/store';
// import * as PositionsListSelectors from '@users-page/store/selectors/load-positions.selectors';
// import * as LoadPositionsActions from '@users-page/store/actions/load-positions.actions';
import * as fromUsers from '@users-page/store';
import { UsersService } from '@users-page/services/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  get formControls(): any {
    return this.form.controls;
  }
  public positionsList$: Observable<Position[]>;
  public tokenError$: Observable<String>;
  public isLoading$: Observable<boolean>;
  public successMessage$: Observable<string>;
  private clearFormSubscription = new Subscription();
  public activeModal = false;

  public inputFileText = 'Upload your photo';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-z]{2,60}')]],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [Validators.required, Validators.pattern('^[+]{0,1}380([0-9]{9})$')],
      ],
      position_id: [null, [Validators.required]],
      photo: [null, [Validators.required]],
    });
  }

  initValues(): void {
    this.positionsList$ = this.store.pipe(
      select(fromUsers.selectPositionsList)
    );
    this.tokenError$ = this.store.pipe(select(fromUsers.selectTokenError));
    this.isLoading$ = this.store.pipe(
      select(fromUsers.selectIsLoadingRegister)
    );
    this.successMessage$ = this.store.pipe(select(fromUsers.selectMessage));
    this.store.dispatch(fromUsers.loadPositions());
    this.clearFormSubscription = this.usersService.clearForm$.subscribe(() => {
      this.form.reset();
      this.activeModal = true;
    });
  }

  uploadFile(event): void {
    if (event.target.files.length) {
      const [file] = event.target.files;
      this.inputFileText = file.name;
      this.formControls.photo.patchValue(file);
    } else {
      this.inputFileText = 'No file chosen';
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(
        fromUsers.registerUser({ registerRequest: this.form.value })
      );
    }
  }

  resetForm(): void {
    this.form.reset();
  }

  closeModal(event: boolean): void {
    this.activeModal = false;
    this.store.dispatch(fromUsers.resetUsers());
  }

  ngOnDestroy() {
    this.clearFormSubscription.unsubscribe();
  }
}
