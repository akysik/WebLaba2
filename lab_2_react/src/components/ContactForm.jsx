import { useEffect, useState } from 'react';
import { FORMSPREE_URL } from '../config';

const inputClass =
    'mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-normal dark:border-slate-600 dark:bg-slate-900 dark:text-gray-100';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    // Через 1 хвилину (60 000 мс) відкриваємо модальне вікно
    useEffect(() => {
        // Якщо користувач уже закрив вікно в цій сесії — не відкриваємо знову
        if (sessionStorage.getItem('feedbackClosed')) {
            return;
        }

        const timer = setTimeout(() => setIsOpen(true), 60000);

        // Очищаємо таймер, якщо компонент буде прибрано зі сторінки
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('feedbackClosed', 'true');
    };

    // Умовний рендеринг: якщо isOpen === false, нічого не показуємо
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/55 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 text-gray-800 dark:bg-slate-800 dark:text-gray-100">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    Зворотний зв'язок
                </h2>

                <form action={FORMSPREE_URL} method="POST" className="space-y-3">
                    <label className="block font-semibold">
                        Ім'я
                        <input type="text" name="name" required className={inputClass} />
                    </label>

                    <label className="block font-semibold">
                        Email
                        <input type="email" name="email" required className={inputClass} />
                    </label>

                    <label className="block font-semibold">
                        Номер телефону
                        <input type="tel" name="phone" className={inputClass} />
                    </label>

                    <label className="block font-semibold">
                        Повідомлення
                        <textarea name="message" rows="4" required className={inputClass} />
                    </label>

                    <div className="flex gap-3 pt-2">
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
                        >
                            Надіслати
                        </button>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                        >
                            Закрити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
