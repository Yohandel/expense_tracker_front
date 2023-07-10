import Swal from 'sweetalert2';
export class SweetAlert {
    async AlertConfirm(
        Title,
        Text,
        TypeSuccessErrorOrWarning) {
        const a = await Swal.fire({
            title: Title,
            text: Text,
            icon: TypeSuccessErrorOrWarning,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#f64e60'

        });
        return a.isConfirmed;
    }

    async AlertConfirm_with_input(
        Title,
        Text,
        InputLabe,
        TypeSuccessErrorOrWarning
    ) {
        const a = await Swal.fire({
            title: Title,
            text: Text,
            input: 'text',
            inputLabel: InputLabel,
            icon: TypeSuccessErrorOrWarning,
            confirmButtonColor: '#f64e60',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',

        });
        return a;
    }
    Default(
        Title,
        Text,
        TypeSuccessErrorOrWarning
    ) {
        Swal.fire(Title, Text, TypeSuccessErrorOrWarning);
    }

    ErrorAlert(
    ) {
        Swal.fire({
            title: 'Warning',
            text: 'This section is under development yet',
            icon: 'warning',
            padding: '3em',
            showCloseButton: true,
            confirmButtonColor: '#e3292e',
        });
    }

}
