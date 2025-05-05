import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color = "#00FFFF" }) => {
	return (
		<motion.div
			className='bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg rounded-xl border border-gray-700 transition-all duration-300'
			whileHover={{ y: -4, scale: 1.02 }}
		>
			<div className='p-4 sm:p-6 flex flex-col justify-between h-full'>
				<div className='flex items-center text-sm font-medium text-gray-300'>
					{Icon && <Icon size={20} className='mr-2' style={{ color }} />}
					{name}
				</div>
				<p className='mt-3 text-3xl font-bold text-white'>{value}</p>
			</div>
		</motion.div>
	);
};

export default StatCard;
