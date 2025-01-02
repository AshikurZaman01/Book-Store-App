
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { setError, setLoading, setOrderCount, setTotalRevenue, setUser } from '../../../Redux/Features/dashboard/dashboardSlice';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    const dispatch = useDispatch();
    const { user, orderCount, totalRevenue, isLoading, error } = useSelector(state => state.dashboard);

    useEffect(() => {
        const fetchDashboardData = async () => {
            dispatch(setLoading(true));

            try {
                const userData = { name: 'Admin', role: 'Admin' };
                const orderCount = 120;
                const totalRevenue = 15000;

                dispatch(setUser(userData));
                dispatch(setOrderCount(orderCount));
                dispatch(setTotalRevenue(totalRevenue));

            } catch (err) {
                dispatch(setError('Failed to load dashboard data.'));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchDashboardData();
    }, [dispatch]);


    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Orders per Month',
                data: [30, 40, 35, 50, 55, 60],
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1,
            },

            {
                label: 'Profit per Month ($)',
                data: [2000, 2500, 2200, 3000, 3300, 3500],
                backgroundColor: '#FF9800',
                borderColor: '#F57C00',
                borderWidth: 1,
            },
        ],
    };


    const doughnutChartData = {
        labels: ['Completed', 'Pending', 'Canceled'],
        datasets: [
            {
                label: 'Order Status',
                data: [100, 15, 5],
                backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mx-auto p-6">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold">User Information</h2>
                            <p><strong>Name:</strong> {user?.name}</p>
                            <p><strong>Role:</strong> {user?.role}</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold">Orders</h2>
                            <p><strong>Total Orders:</strong> {orderCount}</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold">Revenue</h2>
                            <p><strong>Total Revenue:</strong> ${totalRevenue}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Charts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">


                            <div className="p-6 border border-gray-200 rounded-lg shadow-lg flex justify-center items-center">
                                <h3 className="text-lg font-medium mb-4">Orders and Profit per Month (Bar Chart)</h3>
                                <div className="w-full max-w-lg">
                                    <Bar data={barChartData} options={{ responsive: true }} />
                                </div>
                            </div>



                            <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
                                <h3 className="text-lg font-medium mb-4">Order Status (Doughnut Chart)</h3>
                                <div className="h-72">
                                    <Doughnut data={doughnutChartData} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
