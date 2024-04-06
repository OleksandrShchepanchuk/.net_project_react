const RootPath = '/';

const ApplicationPaths = {
    RootPath,
    LoginPage: `${RootPath}login`,
    DepartmentsPage: `${RootPath}departments`,
    DoctorInfoPage: `${RootPath}doctorInfo`,
}

Object.seal(ApplicationPaths);

export default ApplicationPaths;