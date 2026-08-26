export const DashboardModules = {
    PATIENTS: 'patients',
    DOCTORS: 'doctors',
    APPOINTMENTS: 'appointments',
    APPOINTMENT_REQUESTS: 'appointmentRequests',
    REFILL_REQUESTS: 'refillRequests',
    INVENTORY: 'inventory',
    REPLENISHMENT: 'replenishment',
    AUDIT_LOGS: 'auditLogs',
    MY_APPOINTMENTS: 'myAppointments'
}

export type DashboardModule = typeof DashboardModules[keyof typeof DashboardModules];